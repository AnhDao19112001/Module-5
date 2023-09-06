package com.example.connectdbreact.repository;

import com.example.connectdbreact.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product join product_type on product.product_type_id = product_type.id; ", nativeQuery = true)
    Page<Product> getAll(Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product (date_of_birth, name, quantity, product_type_id) VALUE ( :#{#product.dateOfBirth}, :#{#product.name}, :#{#product.quantity}, :#{#product.productType.id} )", nativeQuery = true)
    void createProduct(@Param("product") Product product);

    @Modifying
    @Transactional
    @Query(value = "update product set product_type_id = 2 where id= :id", nativeQuery = true)
    void updateProduct(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "delete from product where id= :id", nativeQuery = true)
    void deleteProduct(@Param("id") Integer id);

    @Query(value = "select * from music where name like %:name%", nativeQuery = true )
    List<Product> searchProductName(@Param("name") String name);
}
