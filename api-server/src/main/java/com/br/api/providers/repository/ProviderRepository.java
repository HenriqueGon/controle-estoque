package com.br.api.providers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.api.providers.model.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {

}
