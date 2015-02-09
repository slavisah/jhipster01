package net.hrkac.jhipster01.repository;

import net.hrkac.jhipster01.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Book entity.
 */
public interface BookRepository extends JpaRepository<Book,Long>{

}
