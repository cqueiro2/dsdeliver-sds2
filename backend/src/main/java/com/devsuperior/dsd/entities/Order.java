package com.devsuperior.dsd.entities;

import java.io.Serializable;
import java.time.Instant;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;



@Entity
@Table(name ="tb_order")
public class Order implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long Id;
	private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;
    
    @ManyToMany
    @JoinTable(name ="tb_order_product", 
     joinColumns = @JoinColumn(name = "order_id"),
     inverseJoinColumns = @JoinColumn (name = "product_id"))
    
    private Set<Product> products = new HashSet<>();
    
    //private List<Product> products = new ArrayList<>();    
    
   


	/**
     * @return Long return the Id
     */
    public Long getId() {
        return Id;
    }

    /**
	 * 
	 */
	

	public Order() {
		super();
	}
	
	

	/**
	 * @param id
	 * @param latitude
	 * @param longtude
	 * @param moment
	 * @param status
	 * @param products
	 */
	public Order(Long id,String address, Double latitude, Double longitude, Instant moment, OrderStatus status, Set<Product> products) {
		super();
		Id = id;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.moment = moment;
		this.status = status;
		
	}

	/**
     * @param Id the Id to set
     */
    public void setId(Long Id) {
        this.Id = Id;
    }

    
    public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	/**
     * @return Double return the latitude
     */
    public Double getLatitude() {
        return latitude;
    }

    /**
     * @param string the latitude to set
     */
    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    /**
     * @return Double return the longtude
     */
    public Double getLongitude() {
        return longitude;
    }

    /**
     * @param string the longtude to set
     */
    public void setLongtude(Double longtude) {
        this.longitude = longitude;
    }

    /**
     * @return Instant return the moment
     */
    public Instant getMoment() {
        return moment;
    }

    /**
     * @param moment the moment to set
     */
    public void setMoment(Instant moment) {
        this.moment = moment;
    }

    /**
     * @return OrderStatus return the status
     */
    public OrderStatus getStatus() {
        return status;
    }

    /**
     * @param d the status to set
     */
    public void setStatus(OrderStatus status) {
        this.status = status;
    }
     

    /**
     * @return List<Product> return the products
     */
    public Set<Product> getProducts() {
        return products;
    }

    

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Id == null) ? 0 : Id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Order other = (Order) obj;
		if (Id == null) {
			if (other.Id != null)
				return false;
		} else if (!Id.equals(other.Id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Order [Id=" + Id + ", latitude=" + latitude + ", longtude=" + longitude + ", moment=" + moment
				+ ", status=" + status + "]";
	}




    
}