package com.br.api.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.br.api.product.model.Product;
import com.br.api.product.repository.ProductRepository;
import com.br.api.user.model.User;

@RestController
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/produtos")
	public List<Product> findAll() {
		return this.productRepository.findAll();
	}
	
	@PostMapping("/produtos/incluir")
	@ResponseStatus(HttpStatus.CREATED)
	public Product add(@RequestBody Product product) {
		return this.productRepository.save(product);
	}
	
	@DeleteMapping("/produtos")
	public void remove(@RequestBody Product product) {
		this.productRepository.delete(product);
	}
}
