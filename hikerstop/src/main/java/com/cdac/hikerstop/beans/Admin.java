package com.cdac.hikerstop.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "a_id")
	private int adminId;
	@NotNull
	private String userName;
	@NotNull
	private String password;                                         

	
	@OneToMany(mappedBy = "admin")
	private List<Event> event;
	
	@OneToOne(mappedBy = "admin", cascade = CascadeType.ALL)
	private AdminInfo adminDetail;
	
	
	public Admin() {
		super();
	}
	
	

	public Admin(String userName, String password, List<Event> event) {
		super();
		this.userName = userName;
		this.password = password;
		this.event = event;
	}

	
	

	public List<Event> getEvent() {
		return event;
	}



	public void setEvent(List<Event> event) {
		this.event = event;
	}



	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public int getAdminId() {
		return adminId;
	}
	
	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", userName=" + userName + ", password=" + password + "]";
	}


}