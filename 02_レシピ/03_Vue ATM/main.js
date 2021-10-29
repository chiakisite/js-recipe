new Vue({
  el: "#app",
  data: {
    nyuryokugaku: 0,
    zandaka: 0,
    logs: [],
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      const now = new Date()
      this.logs.push({ date: now, type: "入金", money: this.nyuryokugaku })
    },
    shukkin: function() {
      this.zandaka -= Number(this.nyuryokugaku)
      const now = new Date()
      this.logs.push({ date: now, type: "出金", money: this.nyuryokugaku })
    },
  },
  computed: {
    out() {
      if (this.zandaka - this.nyuryokugaku < 0) {
        return true
      } else {
        return false
      }
    },
  },
})
