import React, { useEffect } from "react";

const DaumMapTest = () => {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    //위도, 경도로 변환 및 마커표시
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(
      "경기도 성남시 중원구 자혜로32번길 10",
      function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">롯데월드</div>',
          });
          infowindow.open(map, marker);

          map.setCenter(coords);
        }
      }
    );
  }, []);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default DaumMapTest;
