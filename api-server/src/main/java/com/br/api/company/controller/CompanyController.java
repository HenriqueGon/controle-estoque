package com.br.api.company.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.br.api.company.model.Company;
import com.br.api.company.repository.CompanyRepository;

@RestController
@RequestMapping("/empresas")
public class CompanyController {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	@GetMapping
	public List<Company> listar() {
		return this.companyRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Company incluir(@RequestBody Company Company) {
		return this.companyRepository.save(Company);
	}
}
