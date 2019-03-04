package edu.northeastern.cs5200.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.northeastern.cs5200.dao.CommentDao;
import edu.northeastern.cs5200.dao.PlayerDao;
import edu.northeastern.cs5200.dao.UserDao;
import edu.northeastern.cs5200.models.Comment;
import edu.northeastern.cs5200.models.ImportableComment;
import edu.northeastern.cs5200.models.ImportableUser;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.User;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class CommentController {
	@Autowired
	CommentDao commentDao;
	@Autowired
	PlayerDao playerDao;
	@Autowired
	UserDao userDao;
	
	@PostMapping(value = "/api/comment/")
	public Comment postCustomer(@RequestBody ImportableComment comment) {
		User user = userDao.findUserByUsername(comment.getUsername());
		Comment aComment = new Comment();
		aComment.setUser(user);
		aComment.setContent(comment.getContent());
		aComment.setPlayer(playerDao.findPlayerByName(comment.getPlayerFirstName(), comment.getPlayerLastName()));
		return commentDao.createComment(aComment);
	}
	
	@GetMapping(value = "/api/comment")
	public List<Comment> findAllComments(){
		return commentDao.findAllComments();
	}
	
	@GetMapping(value = "/api/comment/player/find/{first}/{last}/")
	public List<Comment> findCommentsAboutPlayer(@PathVariable("first") String first,
												 @PathVariable("last") String last) {
		return commentDao.findCommentsAboutPlayer(first, last);
	}

	@GetMapping(value = "/api/comment/find/{username}/")
	public List<Comment> findCommentsByUser(@PathVariable("username") String username) {

		return commentDao.findCommentsByUser(username);
	}

	@PostMapping(value = "api/comment/player/find/{first}/{last}/create")
	public Comment createComment(@PathVariable("first") String first,
															 @PathVariable("last") String last,
															 @RequestBody ImportableComment importable){
		Comment comment = new Comment();
		comment.setContent(importable.getContent());
		comment.setPlayer(playerDao.findPlayerByName(importable.getPlayerFirstName(), importable.getPlayerLastName()));
		User user = userDao.findUserByUsername(importable.getUsername());
		if (user == null){
			return null;
		}
		comment.setUser(user);
		return commentDao.createComment(comment);
	}
	
	
	
	

	@PutMapping(path = {"/api/comment/player/update/{first}/{last}"})
	public Comment updateComment(@RequestBody ImportableComment aComment) {
		Comment comment = commentDao.findCommentByContentAddLike(aComment.getContent());		
		return comment;
	}
	
	
	@PostMapping(value = "api/comment/player/find/{first}/{last}/reply")
	public Comment createReply(@PathVariable("first") String first, @PathVariable("last") String last,
															 @RequestBody ImportableComment importable){
		return commentDao.addReplyToComment(importable);

	}

	
	@PostMapping(value = "api/comment/player/find/{first}/{last}/find-replies")
	public List<Comment> findRepliesOfComment(@PathVariable("first") String first, @PathVariable("last") String last,
															 @RequestBody ImportableComment aComment) {
		return commentDao.findRepliesForComment(aComment.getContent());
	}
	

	@PutMapping(value="api/comment/delete")
	public Comment deleteComment(@RequestBody ImportableComment aComment) {
		return commentDao.deleteComment(aComment);
	}
	
	@PutMapping(value="api/comment/update/")
	public Comment updateCommentInProfile(@RequestBody ImportableComment comment) {
		return commentDao.updateComment(comment);
	}
	

	/*
	@GetMapping(value = "/api/user/{username}/comment")
	public List<Comment> findCommentsOfUser(String username) {
		return commentDao.findCommentsByUser(username);
	}
	*/
	
	
	
	

}
