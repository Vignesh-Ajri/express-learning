import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
    public static void main(String[] args) {
        // Create a HashMap with key as Integer (ID) and value as String (Name)
        HashMap<Integer, String> students = new HashMap<>();

        // Adding key-value pairs
        students.put(101, "Alice");
        students.put(102, "Bob");
        students.put(103, "Charlie");
        students.put(104, "David");

        System.out.println("Initial HashMap: " + students);

        // Accessing value by key
        System.out.println("Student with ID 102: " + students.get(102));

        // Updating a value
        students.put(103, "Chris");  // Replaces Charlie with Chris
        System.out.println("After update: " + students);

        // Removing a key-value pair
        students.remove(104);
        System.out.println("After removing ID 104: " + students);

        // Checking if a key or value exists
        System.out.println("Contains key 101? " + students.containsKey(101));
        System.out.println("Contains value 'Bob'? " + students.containsValue("Bob"));

        // Iterating over keys and values
        System.out.println("\nIterating through HashMap:");
        for (Map.Entry<Integer, String> entry : students.entrySet()) {
            System.out.println("ID: " + entry.getKey() + ", Name: " + entry.getValue());
        }

        // Size of HashMap
        System.out.println("Size of HashMap: " + students.size());
    }
}
