import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { getProvinceShop } from "../services/map";
// import { EChartsOption } from "echarts";
import styles from "./map.module.css";

echarts.registerTheme("my_theme", {
  backgroundColor: "#fff",
});
echarts.registerMap("map", require("../../map.json"));

const state = {
  tooltip: {
    trigger: "axis",
  },
  geo: {
    map: "map",
    roam: !1,
    scaleLimit: {
      min: 1,
      max: 5,
    },
    zoom: 2,
    top: 300,
    itemStyle: {
      borderColor: "rgba(0, 0, 0,1)",
      areaColor: "#fff",
    },
    emphasis: {
      itemStyle: { areaColor: "#97aea0" },
      // areaColor: "#f2d5ad",
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      borderWidth: 0,
    },
    select: {
      itemStyle: { areaColor: "#97aea0" },
    },
    center: [108.948024, 34.263161],
    regions: [
      {
        name: "浙江省",
        selected: true,
        itemStyle: {
          areaColor: "#97aea0",
        },
        label: {
          show: true,
        },
      },
    ],
  },
  series: [
    {
      name: "店铺分布",
      type: "map",
      map: "map",
      geoIndex: 0,
      // data: [
      //   {
      //     name: "浙江省",
      //     selected: true,
      //   },
      // ],
      // label: {
      //   normal: {
      //     show: true,
      //   },
      // },
      // selectedMode: "single",
    },
  ],
};

// 默认展示浙江省
const Select = ({ provinceName, shop }) => {
  const provinceNameRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const provinceNameHeight =
      (468 - provinceNameRef.current.offsetHeight) * 0.01;
    setHeight(provinceNameHeight);
  }, [provinceName]);

  return (
    <div className={styles.select_box}>
      <div className={styles.select_container}>
        <div className={styles.province_name} ref={provinceNameRef}>{`${
          provinceName || "浙江省"
        } SHOPPING MALL`}</div>
        <div className={styles.shop} style={{ height: `${height}rem` }}>
          {shop.length == 0 ? (
            <span>当前地区暂无店铺</span>
          ) : (
            <ul className={styles.ul}>
              {shop.map((shopName) => (
                <li key={String(shopName)}>{shopName}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.note}>
        <img src="./img/select.png" />
        <span>请先在地图中选择您所在的省份</span>
      </div>
    </div>
  );
};

const Map = () => {
  const [provinceName, setProvinceName] = useState("");
  const [mapState, setMapState] = useState(state);
  const [shopName, setShopName] = useState([]);

  useEffect(() => {
    const shopData = getProvinceShop(provinceName || "浙江省");
    shopData.then((res) => {
      setShopName([...new Set(res.data)]);
    });
  }, [provinceName]);

  const onChartClick = (params) => {
    setProvinceName(params.name);
    setMapState((preState) => {
      return { ...preState, geo: { ...preState.geo, regions: [] } };
    });
  };

  const onEvents = useMemo(() => {
    return {
      click: onChartClick,
    };
  }, []);

  return (
    <div className={styles.container}>
      <ReactECharts
        className={styles.map}
        theme={"my_theme"}
        option={mapState}
        style={{ width: "8.8rem", height: "100vh" }}
        onEvents={onEvents}
      />
      <Select provinceName={provinceName} shop={shopName} />
    </div>
  );
};

export default Map;
