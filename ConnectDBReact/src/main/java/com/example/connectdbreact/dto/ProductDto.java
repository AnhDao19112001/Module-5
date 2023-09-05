package com.example.connectdbreact.dto;

import com.example.connectdbreact.model.ProductType;
import net.bytebuddy.implementation.bind.annotation.Empty;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import javax.validation.constraints.*;

public class ProductDto implements Validator {

    private Integer id;
    @NotBlank(message = "Tên không được để trống!")
    @Size(min = 1, max = 100, message = "Tên khng được quá 100 ký tự!")
    private String name;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateOfBirth;
    @Min(1)
    @Max(100)
    @NotNull(message = "Không được để trống số lượng")
    private Integer quantity;
    private ProductType productType;

    public ProductDto() {
    }

    public ProductDto(Integer id, String name, String dateOfBirth, Integer quantity, ProductType productType) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.quantity = quantity;
        this.productType = productType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
