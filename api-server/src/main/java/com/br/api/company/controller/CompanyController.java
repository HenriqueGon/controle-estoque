package com.br.api.company.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.br.api.company.model.Company;
import com.br.api.company.repository.CompanyRepository;

@RestController
public class CompanyController {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	@GetMapping("/empresas")
	public List<Company> findAll() {
		return this.companyRepository.findAll();
	}
	
	@PostMapping("/empresas/incluir")
	@ResponseStatus(HttpStatus.CREATED)
	public Company add(@RequestBody Company company) {
		return this.companyRepository.save(company);
	}
	
	@DeleteMapping("/empresas")
	public void remove(@RequestBody Company company) {
		this.companyRepository.delete(company);
	}
}
