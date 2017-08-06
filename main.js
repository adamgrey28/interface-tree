const tree = {
  content: "",
  children: [
    {
      content: "Pizza",
      children: [
        {
          content: "open",
          children: [
            {
              content: "openPizza 1",
              children: null
            },
            {
              content: "openPizza 2",
              children: null
            }
          ]
        },
        {
          content: "closed",
          children: [
            {
              content: "closedPizza 1",
              children: null
            },
            {
              content: "closedPizza 2",
              children: null
            }
          ]
        },
      ]
    },

    {
      content: "Drinks",
      children: [
        {
          content: "Coke",
          children: [
            {
              content: "diet",
              children: null
            },
            {
              content: "normal coke",
              children: null
            }
          ]
        },
        {
          content: "tea",
          children: [
            {
              content: "ice tea",
              children: null
            },
            {
              content: "green tea",
              children: null
            }
          ]
        },
      ]
    }
  ]
};

const vm = new Vue({
  el: "#app",
  data: {
    tree: tree,
    state: 0,
    currItem: tree,
    prevItem: null
  },

  methods: {
    /**
     * Dont touch this, seriously
     * @param {number} index 
     */
    goFurther(index) {
      if (this.currItem.children[index].children !== null) {
        this.prevItem = this.currItem;
        this.currItem = this.currItem.children[index];
        if (this.currItem.children[index].children === null) {
          this.state = 1;
        };
      }
    }/* , */

   /*  goBack(index) {
      if (this.currItem.content !== '') {
        this.currItem = this.prevItem;
        this.prevItem = this.currItem.children[index];
      };
    } */
  }
});
