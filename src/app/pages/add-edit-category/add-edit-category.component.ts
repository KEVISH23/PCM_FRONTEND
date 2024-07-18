import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent {
  addCategoryForm!:FormGroup
  id!:string
  isEditable:boolean = false
  btnName:string = "Submit"
  pageTitle:string = "Add Category"
  categories!:any
  selectedFile!:any
  constructor(
    private fb:FormBuilder,
    private eventService:EventService,
    private toast:ToastService,
    private route:ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(){
    this.buildForm()
    this.id = this.route.snapshot.paramMap.get('id') as string
    if(this.id){
      this.isEditable = true
      this.btnName = "Update Category"
      this.pageTitle = "Update Category"
      this.getParticularEvent(this.id)
    }
  }
  getParticularEvent(id:string){
    this.eventService.getParticularCategory(id).subscribe((response)=>{
      if(response.status){
        const patchingValue = {
          categoryName:response.data.categoryName,
        }
        this.addCategoryForm.patchValue(patchingValue)
      }
    })
  }
  buildForm(){
    this.addCategoryForm = this.fb.group({
      categoryName:['',[Validators.required]],
    })
  }
  getAllCategories(){
    this.eventService.getAllCategory().subscribe((response)=>{
      if(response.status){
        this.categories = response.data
      }
    })
  }
  fileChange(e:any){
    console.log(e)
    this.selectedFile = e.target.files[0]
    console.log(this.selectedFile)
  }
  submitForm(){

    if(this.addCategoryForm.valid){
      if(!this.isEditable){
        this.eventService.addCategory(this.addCategoryForm.value).subscribe((response) => {
          if (response.status) {
            this.toast.showSuccess(response.message)
            this.addCategoryForm.reset()
          } else {
            this.toast.showError(response.message)
          }
        },
          (error) => {
            this.toast.showError(error.message)
          }
        )
      }else{
        this.eventService.updateCategory(this.id,this.addCategoryForm.value).subscribe((response) => {
          if (response.status) {
            this.toast.showSuccess(response.message)
            this.addCategoryForm.reset()
            this.router.navigate(['/category'])
          } else {
            this.toast.showError(response.message)
          }
        },
          (error) => {
            this.toast.showError(error.message)
          }
        )
      }
    }else{
      this.toast.showError('Fill the form correctly')
    }
  }
}
