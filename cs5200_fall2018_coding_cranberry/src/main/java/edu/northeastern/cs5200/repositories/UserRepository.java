package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.User;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("Select u from User u  WHERE u.username=:username")
    public User findUserByUsername(@Param("username")String username);





}
