// greeting.test.js
import { getGreetingByHour, getTrato, buildGreeting } from "./greeting.js";

const makeDate = (h) => new Date(2025, 0, 1, h, 0, 0); 

describe("getGreetingByHour", () => {
  test("ES: Buenos días (06-11)", () => {
    expect(getGreetingByHour(makeDate(6), "es")).toBe("Buenos días");
    expect(getGreetingByHour(makeDate(11), "es")).toBe("Buenos días");
  });

  test("ES: Buenas tardes (12-18)", () => {
    expect(getGreetingByHour(makeDate(12), "es")).toBe("Buenas tardes");
    expect(getGreetingByHour(makeDate(18), "es")).toBe("Buenas tardes");
  });

  test("ES: Buenas noches (19-05)", () => {
    expect(getGreetingByHour(makeDate(19), "es")).toBe("Buenas noches");
    expect(getGreetingByHour(makeDate(2), "es")).toBe("Buenas noches");
  });

  test("EN: Good morning / afternoon / evening", () => {
    expect(getGreetingByHour(makeDate(8), "en")).toBe("Good morning");
    expect(getGreetingByHour(makeDate(15), "en")).toBe("Good afternoon");
    expect(getGreetingByHour(makeDate(21), "en")).toBe("Good evening");
  });
});

describe("getTrato", () => {
  test("ES: Masculino", () => {
    expect(getTrato("M", 35, "es")).toBe("señor");
    expect(getTrato("M", 25, "es")).toBe("Estimado");
    expect(getTrato("M", 16, "es")).toBe("señorito");
  });

  test("ES: Femenino", () => {
    expect(getTrato("F", 40, "es")).toBe("señora");
    expect(getTrato("F", 20, "es")).toBe("Estimada");
    expect(getTrato("F", 10, "es")).toBe("señorita");
  });

  test("EN: Masculino", () => {
    expect(getTrato("M", 35, "en")).toBe("Mr.");
    expect(getTrato("M", 22, "en")).toBe("Sir");
    expect(getTrato("M", 12, "en")).toBe("young man");
  });

  test("EN: Femenino", () => {
    expect(getTrato("F", 33, "en")).toBe("Mrs.");
    expect(getTrato("F", 19, "en")).toBe("Miss");
    expect(getTrato("F", 12, "en")).toBe("young lady");
  });

  test("Edad inválida o género vacío → cadena vacía", () => {
    expect(getTrato("M", -1, "es")).toBe("");
    expect(getTrato("F", NaN, "es")).toBe("");
    expect(getTrato("", 25, "es")).toBe("");
    expect(getTrato(undefined, 25, "en")).toBe("");
  });
});

describe("buildGreeting", () => {
  test("ES: arma saludo completo (mañana, Estimada, 20)", () => {
    const d = makeDate(9); 
    const res = buildGreeting("Ana", "F", 20, "es", d);
    expect(res).toBe('Buenos días, Estimada "Ana"');
  });

  test("ES: arma saludo con señor/señora (noche, 40)", () => {
    const d = makeDate(22); 
    expect(buildGreeting("Carlos", "M", 40, "es", d)).toBe('Buenas noches, señor "Carlos"');
    expect(buildGreeting("María", "F", 40, "es", d)).toBe('Buenas noches, señora "María"');
  });

  test("EN: arma saludo completo (tarde, Mr./Miss)", () => {
    const d = makeDate(14); 
    expect(buildGreeting("John", "M", 35, "en", d)).toBe('Good afternoon, Mr. "John"');
    expect(buildGreeting("Mary", "F", 19, "en", d)).toBe('Good afternoon, Miss "Mary"');
  });

  test("Sin trato (género inválido o edad inválida)", () => {
    const d = makeDate(8);
    expect(buildGreeting("Alex", "", 25, "es", d)).toBe('Buenos días "Alex"'); 
    expect(buildGreeting("Sam", "M", -5, "en", d)).toBe('Good morning "Sam"');
  });
});
