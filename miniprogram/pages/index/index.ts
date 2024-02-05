// index.ts
import { fetchHome } from '../../../services/index/index';

Component({
  data: {
    imgSrcs: [],
    tabList: [],
    pageLoading: false,
  },
  methods: {
    
  },

  onLoad() {
    this.init();
  },

  init() {
    this.setData({
      pageLoading: true,
    });

    fetchHome().then(({ swiper, tabList }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadGoodsList(true);
    });
  },
})
