package com.br.api.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.api.user.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
