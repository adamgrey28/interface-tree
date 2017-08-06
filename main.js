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
    /*data from server*/
    dataFromServer: tree,
    /*conditional render with different styles */
    state: 0,
    /*curr leaf, render its child*/
    currItem: tree,
    /*for go back */
    path: [],
    selected: []
  },

  methods: {
    /**
     * Dont touch this, seriously
     * @param {number} index 
     */
    goFurther(index) {
      if (this.currItem.children[index].children !== null) {
        //this.prevItem = this.currItem;
        this.path.push(this.currItem);
        this.currItem = this.currItem.children[index];
        if (this.currItem.children[index].children === null) {
          this.state = 1;
        };
      }
    },

     goBack() {
       this.currItem = this.path[this.path.length - 1];
       this.path.splice(this.path.length - 1, 1);
       if (this.state === 1) {
         this.state = 0;
       };
    },

    addDish(index) {
      const selectedItem = this.currItem.children[index];
      const indexInSelected = this.selected.findIndex(it => it.content === selectedItem.content);
      if (indexInSelected === -1) {
        this.selected.push({
          content: selectedItem.content,
          amount: 1
        });
      } else {
        this.selected[indexInSelected].amount++;
      };
    },

    removeDish(index) {
      const item = this.selected[index];
      item.amount--;
      if (item.amount < 1) {
        this.selected.splice(index, 1);
      };
    },

    removeAllDishes() {
      this.selected = [];
    }
  }
});
