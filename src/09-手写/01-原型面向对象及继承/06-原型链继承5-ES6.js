// ES6 继承

class Super {
  constructor() {
    this.a = '1111'
    this.arr = [1, 2, 3]
  }

  say2() {
    console.log(2222)
  }

}

class Sub extends Super{
  constructor() {
    super()
  }

  say1() {
    console.log(333)
  }
}

let sub1 = new Sub()
let sub2 = new Sub()

sub1.arr.push(6)
console.log(sub1.arr)
console.log(sub2.arr)
