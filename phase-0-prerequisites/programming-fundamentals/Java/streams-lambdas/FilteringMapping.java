import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class FilteringMapping {

    // Simple Person class
    static class Person {
        private final String name;
        private final int age;
        private final double salary;
        private final String department;
        private final List<String> skills;

        public Person(String name, int age, double salary, String department, List<String> skills) {
            this.name = name;
            this.age = age;
            this.salary = salary;
            this.department = department;
            this.skills = skills == null ? Collections.emptyList() : new ArrayList<>(skills);
        }

        public String getName() { return name; }
        public int getAge() { return age; }
        public double getSalary() { return salary; }
        public String getDepartment() { return department; }
        public List<String> getSkills() { return Collections.unmodifiableList(skills); }

        @Override
        public String toString() {
            return name + " (" + age + ", " + department + ", " + salary + ")";
        }
    }

    // Lightweight DTO to demonstrate mapping to different type
    static class PersonDTO {
        private final String name;
        private final int age;
        PersonDTO(String name, int age) { this.name = name; this.age = age; }
        @Override public String toString() { return "PersonDTO{name='" + name + "', age=" + age + "}"; }
    }

    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 30, 50000, "IT", Arrays.asList("Java", "SQL")),
            new Person("Bob", 22, 30000, "Sales", Arrays.asList("Negotiation", "CRM")),
            new Person("Charlie", 35, 70000, "IT", Arrays.asList("Java", "System Design")),
            new Person("Diana", 28, 45000, "Marketing", Arrays.asList("SEO", "Content")),
            new Person("Ethan", 40, 90000, "Management", Arrays.asList("Leadership", "Budgeting")),
            new Person("Fay", 30, 52000, "Sales", Arrays.asList("Communication", "CRM"))
        );

        System.out.println("People:");
        people.forEach(System.out::println);
        System.out.println();

        // ---------- Filtering ----------
        // get all people age >= 30
        List<Person> overThirty = people.stream()
            .filter(p -> p.getAge() >= 30)
            .collect(toList());
        System.out.println("People age >= 30: " + overThirty);

        // ---------- Mapping ----------
        // map to names (String)
        List<String> names = people.stream()
            .map(Person::getName)
            .collect(toList());
        System.out.println("All names: " + names);

        // map to DTO (new type)
        List<PersonDTO> dtos = people.stream()
            .filter(p -> p.getDepartment().equals("IT"))
            .map(p -> new PersonDTO(p.getName(), p.getAge()))
            .collect(toList());
        System.out.println("IT department DTOs: " + dtos);

        // ---------- mapToInt and numeric summaries ----------
        IntSummaryStatistics ageStats = people.stream()
            .mapToInt(Person::getAge)
            .summaryStatistics();
        System.out.println("Age stats -> count: " + ageStats.getCount() + ", avg: " + ageStats.getAverage() +
                           ", min: " + ageStats.getMin() + ", max: " + ageStats.getMax());

        double avgSalary = people.stream()
            .mapToDouble(Person::getSalary)
            .average().orElse(0);
        System.out.println("Average salary: " + avgSalary);

        // ---------- flatMap: flatten skills across people ----------
        List<String> uniqueSkills = people.stream()
            .flatMap(p -> p.getSkills().stream())   // stream of skills streams -> flat
            .distinct()
            .collect(toList());
        System.out.println("Unique skills: " + uniqueSkills);

        // ---------- groupingBy + mapping ----------
        // Group people by department, but store only names per department
        Map<String, List<String>> namesByDept = people.stream()
            .collect(groupingBy(Person::getDepartment, mapping(Person::getName, toList())));
        System.out.println("Names by department: " + namesByDept);

        // ---------- partitioningBy ----------
        // Partition people into two groups: age >= 30 (true) and others (false)
        Map<Boolean, List<Person>> partitionedByAge = people.stream()
            .collect(partitioningBy(p -> p.getAge() >= 30));
        System.out.println("Partitioned by age >= 30: " + partitionedByAge);

        // ---------- findFirst / findAny after filter + map ----------
        Optional<String> firstSalesPerson = people.stream()
            .filter(p -> p.getDepartment().equals("Sales"))
            .map(Person::getName)
            .findFirst();
        System.out.println("First Sales person (name): " + firstSalesPerson.orElse("none"));

        // ---------- demonstrate lazy evaluation with peek ----------
        List<String> lazyDemo = people.stream()
            .peek(p -> System.out.println("source element: " + p.getName()))
            .filter(p -> p.getAge() > 25)
            .peek(p -> System.out.println("after filter (>25): " + p.getName()))
            .map(Person::getName)
            .limit(3)
            .collect(toList());
        System.out.println("Lazy demo result (first 3 age>25 names): " + lazyDemo);

        // ---------- short-circuit example: anyMatch (stops early) ----------
        boolean hasHighEarner = people.stream()
            .peek(p -> System.out.println("check salary for: " + p.getName()))
            .anyMatch(p -> p.getSalary() > 80000);
        System.out.println("Any salary > 80000? " + hasHighEarner);
    }
}
