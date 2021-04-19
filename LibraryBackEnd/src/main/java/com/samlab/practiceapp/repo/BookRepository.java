package com.samlab.practiceapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samlab.practiceapp.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{



	

	public List<Book> findBybookName(String name);

}
