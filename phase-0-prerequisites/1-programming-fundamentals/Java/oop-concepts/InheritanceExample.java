class Person {
    String name;
    void sayHello() {
        System.out.println("Hello, I am " + name);
    }
}

class Teacher extends Person {
    void teach() {
        System.out.println(name + " is teaching.");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Teacher t = new Teacher();
        t.name = "Anand";
        t.sayHello();
        t.teach();
    }
}
