describe("expect test", () => {
  it("37 to equal 37", () => {
    // expect(1 + 2).toBe(3); // 1 + 2의 결과가 3이길 기대한다.
    expect(37).toBe(37);
  });
  it("{age: 30} to equal {age: 30}", () => {
    // expect({ age: 30 }).toBe({ age: 30 });
    expect({ age: 30 }).toEqual({ age: 30 });
  });
  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5); // 길이 확인
  });
  it(".toHaveProperty", () => {
    expect({ name: "jeong" }).toHaveProperty("name");
    expect({ name: "jeong" }).toHaveProperty("name", "jeong");
  });
  it(".toBeDefined", () => {
    expect({ name: "jeong" }.name).toBeDefined();
    // expect({ name: "jeong" }.age).toBeDefined();
  });
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo); // error를 상속 받은 타입을 구분할 때
  });
});

describe("use async test", () => {
  it("async-await", async () => {
    function p() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(30);
        }, 1000);
      });
    }
    const data = await p();
    return expect(data).toBe(30);
  });

  it("async-await, catch", async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("error"));
        }, 1000);
      });
    }
    try {
      await p();
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });
});
