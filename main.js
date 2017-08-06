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

const tree2 = {
  'pizza': {
    content: 'Пицца',
    children: ['openPizza', 'closedPizza'],
    parent: null
  },

  'openPizza': {
    content: 'Открытая пицца',
    children: ['openPizza 1', 'openPizza 2'],
    parent: 'pizza'
  },

  'closedPizza': {
    content: 'Закрытая пицца',
    children: ['closedPizza 1', 'closedPizza 2'],
    parent: 'pizza'
  },

  'openPizza 1': {
    content: 'Открытая пицца 1',
    children: null,
    parent: 'openPizza'
  },

  'openPizza 2': {
    content: 'Открытая пицца 2',
    children: null,
    parent: 'openPizza'
  },

  'drinks': {
    content: 'Напитки',
    children: ['tea', 'coke'],
    parent: null
  },

  'coke': {
    content: 'Кола',
    children: ['dietCoke', 'regularCoke'],
    parent: 'drinks'
  },

  'dietCoke': {
    content: 'Кола',
    children: null,
    parent: 'coke'
  },

  'regularCoke': {
    content: 'Кола',
    children: null,
    parent: 'coke'
  },

  'tea': {
    content: 'Чай',
    children: ['iceTea', 'blackTea'],
    parent: 'drinks'
  },

  'icetea': {
    content: 'Холодный чай',
    children: null,
    parent: 'tea'
  },

  'blackTea': {
    content: 'Черный чай',
    children: null,
    parent: 'tea'
  }
};

const vm = new Vue({
  el: "#app",
  data: {
    /*data from server*/
    tree: tree,
    /*conditional render with different styles */
    state: 0,
    /*curr leaf, render its child*/
    currItem: tree,
    /*for go back */
    lastIndex: -1,
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
    },

     goBack() {
       this.currItem = this.prevItem;
    }
  }
});
