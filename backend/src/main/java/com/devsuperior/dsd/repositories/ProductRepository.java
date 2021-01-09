package com.devsuperior.dsd.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsd.entities.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findAllByOrderByNameAsc();
}
