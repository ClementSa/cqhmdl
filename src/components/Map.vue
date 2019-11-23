<template>
  <div class="mask">
    <baidu-map :style="{width:map.width,height:map.height}" class="map" ak="你的百度地图秘钥" :zoom="map.zoom" :center="{lng: map.center.lng, lat: map.center.lat}"
 @ready="handler" :scroll-wheel-zoom="true">
      <!--比例尺控件-->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!--缩放控件-->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ></bm-navigation>
      <!--聚合动态添加的点坐标-->
      <bm-marker-clusterer :averageCenter="true">
          <bm-marker v-for="marker of markers" :key="marker.code" :position="{lng: marker.lng, lat: marker.lat}" @click="lookDetail(marker)"></bm-marker>
      </bm-marker-clusterer>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import BmMarkerClusterer from  'vue-baidu-map/components/extra/MarkerClusterer'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
export default {
  name: "pm-distribution",
  components: {
      BaiduMap,
      BmScale,
      BmNavigation,
      BmMarkerClusterer,
      BmMarker
  },

}
</script>

<style>
  .mask{
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 9;
    overflow: hidden;
    user-select: none;
    width: 1200px;
    height: 500px;
    opacity: 0;
    background: #000;
    transition: opacity 0.4s ease 0s;
  }
</style>