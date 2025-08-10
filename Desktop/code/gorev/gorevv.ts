interface User {
  username: string;
  password: string;
  role: "admin" | "user";
}

function login(user: User): boolean {
  if (user.role === "admin" && user.password === "admin123") return true;
  if (user.role === "user" && user.password === "user123") return true;
  return false;
}
////
interface MenuItem {
  label: string;
  children?: MenuItem[];
}

///
function delay(ms: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Tamamlandı"), ms));
}
///
type ApiResponse =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function gosterCevap(res: ApiResponse) {
  console.log(res.status === "success" ? res.data : res.message);
}

gosterCevap({ status: "success", data: "Merhaba" });
gosterCevap({ status: "error", message: "Bir hata oluştu" });

////

enum Category {
  History,
  Science,
  Fiction,
  Biography,
}

interface Book {
  title: string;
  category: Category;
}

function kitapkategori(books: Book[], category: Category): Book[] {
  return books.filter((book) => book.category === category);
}
///
class DataBox<T> {
  private value: T;
  constructor(initial: T) {
    this.value = initial;
  }
  get(): T {
    return this.value;
  }
  set(newValue: T): void {
    this.value = newValue;
  }
}
///
interface FormField {
  name: string;
  value: string;
  required: boolean;
}

function validateForm(fields: FormField[]): boolean {
  return !fields.some((field) => field.required && !field.value.trim());
}
////
class Calculator {
  value: number;
  constructor(start: number) {
    this.value = start;
  }
  add(n: number): this {
    this.value += n;
    return this;
  }
  subtract(n: number): this {
    this.value -= n;
    return this;
  }
  multiply(n: number): this {
    this.value *= n;
    return this;
  }
  divide(n: number): this {
    this.value /= n;
    return this;
  }
  result(): number {
    return this.value;
  }
}
///
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}
///
interface Task {
  id: string;
  content: string;
}

