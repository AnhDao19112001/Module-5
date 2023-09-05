package com.example.connectdbreact.repository;

import com.example.connectdbreact.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
//@Query(value = "select * from ProductType ", nativeQuery = true)
//    List<ProductType> getAll();
}
