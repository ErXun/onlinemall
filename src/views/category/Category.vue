<template>
  <div class="view" ref="viewRef">
    <ul>
      <li>种类1</li>
      <li>种类2</li>
      <li>种类3</li>
      <li>种类4</li>
      <li>种类5</li>
      <li>种类6</li>
      <li>种类7</li>
      <li>种类8</li>
      <li>种类9</li>
      <li>种类10</li>
      <li>种类11</li>
      <li>种类12</li>
      <li>种类13</li>
      <li>种类14</li>
      <li>种类15</li>
      <li>种类16</li>
      <li>种类17</li>
      <li>种类18</li>
      <li>种类19</li>
      <li>种类20</li>
      <li>种类21</li>
      <li>种类22</li>
      <li>种类23</li>
      <li>种类24</li>
      <li>种类25</li>
      <li>种类26</li>
      <li>种类27</li>
      <li>种类28</li>
      <li>种类29</li>
      <li>种类30</li>
      <li>种类31</li>
      <li>种类32</li>
      <li>种类33</li>
      <li>种类34</li>
      <li>种类35</li>
      <li>种类36</li>
      <li>种类37</li>
      <li>种类38</li>
      <li>种类39</li>
      <li>种类40</li>
      <li>种类41</li>
      <li>种类42</li>
      <li>种类43</li>
      <li>种类44</li>
      <li>种类45</li>
      <li>种类46</li>
      <li>种类47</li>
      <li>种类48</li>
      <li>种类49</li>
      <li>种类50</li>
      <li>种类51</li>
      <li>种类52</li>
      <li>种类53</li>
      <li>种类54</li>
      <li>种类55</li>
      <li>种类56</li>
      <li>种类57</li>
      <li>种类58</li>
      <li>种类59</li>
      <li>种类60</li>
      <li>种类61</li>
      <li>种类62</li>
      <li>种类63</li>
      <li>种类64</li>
      <li>种类65</li>
      <li>种类66</li>
      <li>种类67</li>
      <li>种类68</li>
      <li>种类69</li>
      <li>种类70</li>
      <li>种类71</li>
      <li>种类72</li>
      <li>种类73</li>
      <li>种类74</li>
      <li>种类75</li>
      <li>种类76</li>
      <li>种类77</li>
      <li>种类78</li>
      <li>种类79</li>
      <li>种类80</li>
      <li>种类81</li>
      <li>种类82</li>
      <li>种类83</li>
      <li>种类84</li>
      <li>种类85</li>
      <li>种类86</li>
      <li>种类87</li>
      <li>种类88</li>
      <li>种类89</li>
      <li>种类90</li>
      <li>种类91</li>
      <li>种类92</li>
      <li>种类93</li>
      <li>种类94</li>
      <li>种类95</li>
      <li>种类96</li>
      <li>种类97</li>
      <li>种类98</li>
      <li>种类99</li>
      <li>种类100</li>
    </ul>
  </div>
</template>

<script>
import betterScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    /**
     * probeType 监听
     * 0,1都不侦测实时位置
     * 2,在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
     * 3，只要是滚动就侦测
     */
    this.scroll = new betterScroll(this.$refs.viewRef, {
      probeType: 3,
      click: true,
      pullUpLoad:true // 开启下拉加载更多
    });
    this.scroll.on('scroll', (position) => {
      console.log(position); //实时打印位置
    });
    this.scroll.on('pullingUp',() => {
      console.log('下拉加载更多');
      // 发送网络请求，加载更多数据
      this.scroll.finishPullUp()
    })
  }
};
</script>
<style scoped>
.view {
  height: 300px;
  background-color: #f00;
  overflow: hidden;
}
</style>
