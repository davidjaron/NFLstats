package edu.northeastern.cs5200.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.northeastern.cs5200.models.Comment;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.User;


public interface CommentRepository extends CrudRepository<Comment, Integer>{
	
	@Query("SELECT c FROM Comment c WHERE c.player=:player AND c.commentReplied = null")
	public List<Comment> findCommentsAboutPlayer(@Param("player") Player player);
	
	
	@Query("SELECT c FROM Comment c WHERE c.user=:user")
	public List<Comment> findCommentsByUser(@Param("user") User user);
	
	@Query("SELECT c FROM Comment c WHERE c.content=:content")
	public Comment findCommentByContent(@Param("content") String content);
	
	
	@Query("SELECT c FROM Comment c WHERE c.commentReplied=:commentReplied")
	public List<Comment> findRepliesForComment(@Param("commentReplied") Comment commentReplid);

	/*
	@Query("SELECT c FROM Comment c WHERE c.user=user")
	public List<Comment> finddCommentByuser(@Param("user") User user);
	*/
	
	

}
