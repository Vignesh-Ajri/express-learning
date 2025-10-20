package com.example.relationships;

import com.example.relationships.entity.Author;
import com.example.relationships.entity.Book;
import com.example.relationships.entity.Category;
import com.example.relationships.repository.AuthorRepository;
import com.example.relationships.repository.BookRepository;
import com.example.relationships.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataLoader implements CommandLineRunner {

    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;

    public DataLoader(AuthorRepository authorRepository, BookRepository bookRepository, CategoryRepository categoryRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Author a1 = new Author("Rabindranath Tagore");
        Author a2 = new Author("R.K. Narayan");

        Category c1 = new Category("Fiction");
        Category c2 = new Category("Poetry");

        Book b1 = new Book("Gitanjali");
        b1.setAuthor(a1);
        b1.setCategories(Arrays.asList(c2));

        Book b2 = new Book("Malgudi Days");
        b2.setAuthor(a2);
        b2.setCategories(Arrays.asList(c1));

        authorRepository.saveAll(Arrays.asList(a1, a2));
        categoryRepository.saveAll(Arrays.asList(c1, c2));
        bookRepository.saveAll(Arrays.asList(b1, b2));
    }
}
