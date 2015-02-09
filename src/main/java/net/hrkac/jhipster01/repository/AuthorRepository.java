package net.hrkac.jhipster01.repository;

import net.hrkac.jhipster01.domain.Author;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Author entity.
 */
public interface AuthorRepository extends JpaRepository<Author,Long>{

}
