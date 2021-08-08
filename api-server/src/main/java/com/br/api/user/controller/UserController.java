package com.br.api.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.br.api.user.model.User;
import com.br.api.user.repository.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/usuarios")
	public List<User> findAll() {
		return this.userRepository.findAll();
	}
	
	@PostMapping("/usuarios/incluir")
	@ResponseStatus(HttpStatus.CREATED)
	public User add(@RequestBody User user) {
		return this.userRepository.save(user);
	}
	
	@DeleteMapping("/usuarios")
	public void remove(@RequestBody User user) {
		this.userRepository.delete(user);
	}
}
