new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: null,
      tab: null,
      TabItems: [
        {
          tab: "Chính",
          content: "Tab 1 Content",
          icon: "fa fa-tablet",
        },
        {
          tab: "Mạng xã hội",
          content: "Tab 2 Content",
          icon: "fa-users",
        },
        {
          tab: "Quảng cáo",
          content: "Tab 3 Content",
          icon: "fa fa-tag",
        },
      ],
      // ! main
      items: [
        {
          text: "Hộp thư đến",
          icon: "fa-tablet",
        },
        {
          text: "Có gắn sao",
          icon: "fa-star",
        },
        {
          text: "Đã tạm ẩn",
          icon: "fa-clock-o",
        },
        {
          text: "Đã gửi",
          icon: "fa-paper-plane-o",
        },
        {
          text: "Thư nháp",
          icon: "fa-file-o",
        },
      ],
      subMenu: [
        {
          text: "Quan trọng",
          icon: "fa-tablet",
        },
        {
          text: "Trò chuyện",
          icon: "fa-star",
        },
        {
          text: "Đã lên lịch",
          icon: "fa-clock-o",
        },
        {
          text: "Tất cả thư",
          icon: "fa-paper-plane-o",
        },
        {
          text: "Thùng rác",
          icon: "fa-file-o",
        },
        {
          text: "Danh mục",
          icon: "fa-file-o",
        },
        {
          text: "Quản lý nhãn",
          icon: "fa-file-o",
        },
        {
          text: "Tạo nhãn mới",
          icon: "fa-file-o",
        },
      ],
      iconSubmenu: "fa-chevron-down",
      titleSubmenu: "Mở rộng danh sách",

      // ! --------------
    };
  },
  mounted() {},
  methods() {},
});
