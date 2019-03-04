package edu.northeastern.cs5200.dao;

import java.util.List;
import java.util.Optional;

import edu.northeastern.cs5200.models.ImportableComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.northeastern.cs5200.models.Comment;
import edu.northeastern.cs5200.models.Player;
import edu.northeastern.cs5200.models.User;
import edu.northeastern.cs5200.repositories.CommentRepository;
import edu.northeastern.cs5200.repositories.PlayerRepository;
import edu.northeastern.cs5200.repositories.UserRepository;

@Service
public class CommentDao {
	  @Autowired
	  private CommentRepository commentRepo;

	  @Autowired
		private PlayerRepository playerRepository;

	  @Autowired
		private UserRepository userRepository;
	  
	  
	  public Comment createComment(Comment comment){
		    return commentRepo.save(comment);
	  }

	  public void truncate(){
		  commentRepo.deleteAll();
	  }
	  
	  
	  public List<Comment> findAllComments(){
		  return (List<Comment>) commentRepo.findAll();
		 
	  }
	  
	  
	  public List<Comment> findCommentsAboutPlayer(String first, String last) {
	  	Player player = playerRepository.findPlayerByName(first, last);
		  return commentRepo.findCommentsAboutPlayer(player);
	  }


	  
	  public List<Comment> findCommentsByUser(String username){
	  	User user = userRepository.findUserByUsername(username);
		  return commentRepo.findCommentsByUser(user);
	  }
	  
	 public Comment deleteComment(ImportableComment comment) {
		 Comment aComment = commentRepo.findCommentByContent(comment.getContent());
		 commentRepo.delete(aComment);
		 return aComment;	 
	 }
	 
	  
	  public List<Comment> findRepliesForComment(String originalContent) {
		  Comment comment = commentRepo.findCommentByContent(originalContent);
		 
		  return commentRepo.findRepliesForComment(comment);
		  
	  }
	  
	  
	  public Comment addReplyToComment(ImportableComment aComment) {
	  	User user = userRepository.findUserByUsername(aComment.getUsername());
	  	if (user == null){
	  		return null;
			}
		  Comment comment = commentRepo.findCommentByContent(aComment.getOriginalContent());
		  Comment commentReply = new Comment();
		  commentReply.setContent(aComment.getContent());
		  commentReply.setCommentReplied(comment);
		  commentReply.setUser(user);
		  return commentRepo.save(commentReply);   
	  }
	  
	  public Comment findCommentByContentAddLike(String content) {
		  Comment comment = commentRepo.findCommentByContent(content);
		  comment.setLikes(comment.getLikes() + 1);
		  return commentRepo.save(comment);
		  
	  }	  
	  
	  public Comment findCommentByContent(String content) {
		  return commentRepo.findCommentByContent(content);
	  }
	  
	  public Comment updateComment(ImportableComment aComment) {
		  Optional<Comment> comment = commentRepo.findById(aComment.getId());
		  Comment realComment = comment.get();
		  realComment.setContent(aComment.getContent());
		  return commentRepo.save(realComment);
	  }
	  
	  
	  public Optional<Comment> findCommentById(int id) {
		  return commentRepo.findById(id);
	  }
	
}
