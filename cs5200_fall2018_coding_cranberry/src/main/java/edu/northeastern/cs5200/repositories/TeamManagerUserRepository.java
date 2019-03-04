package edu.northeastern.cs5200.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.models.Game;
import edu.northeastern.cs5200.models.TeamManagerUser;
import edu.northeastern.cs5200.models.User;

public interface TeamManagerUserRepository extends CrudRepository<TeamManagerUser, Integer>{
	
	@Query("SELECT m FROM TeamManagerUser m WHERE m.username=:username")
	public TeamManagerUser findManagerByUsername(@Param("username") String username);

}
