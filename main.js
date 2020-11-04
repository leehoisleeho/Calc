//设置动态rem
let width = document.body.scrollWidth
document.write('<style>html{font-size:' + width / 10 + 'px; }</style>')

let Calc = {
  value1: 0,
  value2: 0,
  operator: "",
  result: 0,
  numBtn: function numBtn(num) {
    if (this.operator === "") {
      this.value1 = this.value1 * 10 + num
      document.getElementById("output").innerHTML = this.value1
    } else {

      this.value2 = this.value2 * 10 + num
      document.getElementById("output").innerHTML = this.value2
    }
  },
  opBtn: function (op) {
    if (op === "=") {
      switch (this.operator) {
        case "+": this.result = this.value1 + this.value2
          break;
        case "-": this.result = this.value1 - this.value2
          break;
        case "*": this.result = this.value1 * this.value2
          break;
        case "/":
          if (this.value2 === 0) {
            alert("你傻吗？除数不能为0")
          } else {
            this.result = this.value1 / this.value2
          }
          break;
      }
      document.getElementById("output").innerHTML = this.result
      this.value1 = this.result;
      this.value2 = 0;
      this.operator = "";
      this.result = 0
    } else {
      this.operator = op;
    }
  },
  clear: function () {
    this.value1 = 0
    this.value2 = 0
    this.result = 0
    this.operator = ""
    document.getElementById("output").innerHTML = 0
  }
}

let _1 = document.getElementById('_1').ontouchstart = function () {
  Calc.clear()
  document.getElementById('_1').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_1 = document.getElementById('_1').ontouchend = function () {
  document.getElementById('_1').style.boxShadow = ""
}

let _2 = document.getElementById('_2').ontouchstart = function () {
  Calc.numBtn(1)
  document.getElementById('_2').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_2 = document.getElementById('_2').ontouchend = function () {
  document.getElementById('_2').style.boxShadow = ""
}

let _3 = document.getElementById('_3').ontouchstart = function () {
  Calc.opBtn('+')
  document.getElementById('_3').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_3 = document.getElementById('_3').ontouchend = function () {
  document.getElementById('_3').style.boxShadow = ""
}

let _4 = document.getElementById('_4').ontouchstart = function () {
  Calc.opBtn('-')
  document.getElementById('_4').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_4 = document.getElementById('_4').ontouchend = function () {
  document.getElementById('_4').style.boxShadow = ""
}

let _5 = document.getElementById('_5').ontouchstart = function () {
  Calc.numBtn(1)
  document.getElementById('_5').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_5 = document.getElementById('_5').ontouchend = function () {
  document.getElementById('_5').style.boxShadow = ""
}

let _6 = document.getElementById('_6').ontouchstart = function () {
  Calc.numBtn(2)
  document.getElementById('_6').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_6 = document.getElementById('_6').ontouchend = function () {
  document.getElementById('_6').style.boxShadow = ""
}

let _7 = document.getElementById('_7').ontouchstart = function () {
  Calc.numBtn(3)
  document.getElementById('_7').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_7 = document.getElementById('_7').ontouchend = function () {
  document.getElementById('_7').style.boxShadow = ""
}

let _8 = document.getElementById('_8').ontouchstart = function () {
  Calc.opBtn('*')
  document.getElementById('_8').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_8 = document.getElementById('_8').ontouchend = function () {
  document.getElementById('_8').style.boxShadow = ""
}

let _9 = document.getElementById('_9').ontouchstart = function () {
  Calc.numBtn(4)
  document.getElementById('_9').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_9 = document.getElementById('_9').ontouchend = function () {
  document.getElementById('_9').style.boxShadow = ""
}

let _10 = document.getElementById('_10').ontouchstart = function () {
  Calc.numBtn(5)
  document.getElementById('_10').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_10 = document.getElementById('_10').ontouchend = function () {
  document.getElementById('_10').style.boxShadow = ""
}

let _11 = document.getElementById('_11').ontouchstart = function () {
  Calc.numBtn(6)
  document.getElementById('_11').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_11 = document.getElementById('_11').ontouchend = function () {
  document.getElementById('_11').style.boxShadow = ""
}

let _12 = document.getElementById('_12').ontouchstart = function () {
  Calc.opBtn('/')
  document.getElementById('_12').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_12 = document.getElementById('_12').ontouchend = function () {
  document.getElementById('_12').style.boxShadow = ""
}

let _13 = document.getElementById('_13').ontouchstart = function () {
  Calc.numBtn(7)
  document.getElementById('_13').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_13 = document.getElementById('_13').ontouchend = function () {
  document.getElementById('_13').style.boxShadow = ""
}

let _14 = document.getElementById('_14').ontouchstart = function () {
  Calc.numBtn(8)
  document.getElementById('_14').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_14 = document.getElementById('_14').ontouchend = function () {
  document.getElementById('_14').style.boxShadow = ""
}

let _15 = document.getElementById('_15').ontouchstart = function () {
  Calc.numBtn(9)
  document.getElementById('_15').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_15 = document.getElementById('_15').ontouchend = function () {
  document.getElementById('_15').style.boxShadow = ""
}

let _16 = document.getElementById('_16').ontouchstart = function () {
  Calc.opBtn('=')
  document.getElementById('_16').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_16 = document.getElementById('_16').ontouchend = function () {
  document.getElementById('_16').style.boxShadow = ""
}

let _17 = document.getElementById('_17').ontouchstart = function () {
  Calc.numBtn(0)
  document.getElementById('_17').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_17 = document.getElementById('_17').ontouchend = function () {
  document.getElementById('_17').style.boxShadow = ""
}

let _18 = document.getElementById('_18').ontouchstart = function () {

  document.getElementById('_18').style.boxShadow = 'inset 0px 0px 5px 1px #adacac'
}
_18 = document.getElementById('_18').ontouchend = function () {
  document.getElementById('_18').style.boxShadow = ""
}

