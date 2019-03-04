package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.Topic;

public interface TopicRepository extends CrudRepository<Topic, Integer> {

}
