package com.samlab.practiceapp.controller;

import org.springframework.web.bind.annotation.RestController;

import com.samlab.practiceapp.model.Book;
import com.samlab.practiceapp.repo.BookRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
public class BookController {
@Autowired BookRepository bookrepo;
	@PostMapping("/bookSave")
	
	public String insertBook(@RequestBody Book book) {
		bookrepo.save(book);
		return "your record is saved..";
		
	}
	@PostMapping("/bookAllSave")
	public String insertBook(@RequestBody List<Book> book) {
		bookrepo.saveAll(book);
		return "your All record is saved..";
		
	}
	@GetMapping("/users")
	public List<Book> getBook(){
		return (List<Book>) bookrepo.findAll();
		}
	@GetMapping("/getByBookName/{name}")
	public List<Book> getBook(@PathVariable ("name") String bookName){
		return (List<Book>) bookrepo.findBybookName(bookName);
		}
	@GetMapping("/getByBookId/{bookId}")
	
	public Optional<Book> getBook(@PathVariable ("bookId") Long id){
		return bookrepo.findById(id);
		}
	@PutMapping("/updateByBookId/{bookId}")

	public String updateBook(@RequestBody Book book,@PathVariable ("bookId") Long id){
		book.setBookId(id);
		bookrepo.save(book);
		return "record is updated";
		}
	@DeleteMapping("/deleteByBookId/{bookId}")
	public String deleteBook(@PathVariable ("bookId") Long id){
		bookrepo.deleteById(id);
		return "book is deleted";
		}
}
