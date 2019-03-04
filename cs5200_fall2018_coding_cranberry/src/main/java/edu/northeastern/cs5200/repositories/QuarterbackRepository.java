package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.models.Quarterback;


public interface QuarterbackRepository extends CrudRepository<Quarterback, Integer> {
}
