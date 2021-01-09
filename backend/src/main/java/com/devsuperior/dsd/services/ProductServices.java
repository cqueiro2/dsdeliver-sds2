package com.devsuperior.dsd.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsd.dto.ProductDTO;
import com.devsuperior.dsd.entities.Product;
import com.devsuperior.dsd.repositories.ProductRepository;


@Service
public class ProductServices {
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
   public List<ProductDTO> findAll(){
	   List<Product> list = repository.findAllByOrderByNameAsc();
	   return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	   
   }
}
