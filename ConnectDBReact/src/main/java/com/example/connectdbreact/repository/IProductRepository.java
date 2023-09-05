package com.example.connectdbreact.repository;

import com.example.connectdbreact.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product join product_type on product.product_type_id = product_type.id; ",nativeQuery = true)
    List<Product> getAll();

    @Query(value = "select * from Product join product_type pt on pt.id = product.product_type_id " +
            "where product.name like CONCAT ('%', product.name ,'%') and pt.name like CONCAT('%', pt.name ,'%')", nativeQuery = true)
    Page<Product> findAll(@Param("searchByName") String searchByName,
            @Param("searchByNameType") String searchByNameType,
            Pageable pageable);


}
