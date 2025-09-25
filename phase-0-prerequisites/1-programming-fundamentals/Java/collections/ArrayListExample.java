import java.util.ArrayList;
import java.util.Collections;

public class ArrayListExample {
    public static void main(String[] args) {
        // Create an ArrayList of Strings
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements to ArrayList
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");
        fruits.add("Orange");

        System.out.println("Initial ArrayList: " + fruits);

        // Accessing elements by index
        System.out.println("First fruit: " + fruits.get(0));

        // Updating an element
        fruits.set(1, "Blueberry");  // Replace "Banana" with "Blueberry"
        System.out.println("After update: " + fruits);

        // Removing an element
        fruits.remove("Mango");  // Removes "Mango"
        System.out.println("After removing Mango: " + fruits);

        // Checking if element exists
        System.out.println("Contains Apple? " + fruits.contains("Apple"));

        // Iterating through the ArrayList
        System.out.println("\nIterating with for-each loop:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Sorting the ArrayList
        Collections.sort(fruits);
        System.out.println("Sorted list: " + fruits);

        // Getting size of the ArrayList
        System.out.println("Size of ArrayList: " + fruits.size());
    }
}
