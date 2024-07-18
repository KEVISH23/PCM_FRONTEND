import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  addProductForm!: FormGroup
  id!: string
  isEditable: boolean = false
  btnName: string = "Submit"
  pageTitle: string = "Add Product"
  categories!: any
  selectedFile: any = undefined
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.buildForm()
    this.getAllCategories()
    this.id = this.route.snapshot.paramMap.get('id') as string
    if (this.id) {
      this.isEditable = true
      this.btnName = "Update"
      this.pageTitle = "Update Product"
      this.getParticularEvent(this.id)
    }
  }



  getParticularEvent(id: string) {
    this.eventService.getParticularEvent(id).subscribe((response) => {
      if (response.status) {
        const patchingValue = {
          title: response.data[0].title,
          description: response.data[0].description,
          price: response.data[0].price,
          categoryId: response.data[0].categoryId,
        }
        this.addProductForm.patchValue(patchingValue)
      }
    })
  }
  buildForm() {
    this.addProductForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
    })
  }
  getAllCategories() {
    this.eventService.getAllCategory().subscribe((response) => {
      if (response.status) {
        this.categories = response.data
      }
    })
  }
  fileChange(e: any) {
    console.log(e)
    this.selectedFile = e.target.files[0]
    console.log(this.selectedFile)
  }
  submitForm() {

    if (this.addProductForm.valid) {
      const formData: FormData = new FormData()
      formData.append('title', this.addProductForm.value.title)
      formData.append('description', this.addProductForm.value.description)
      formData.append('price', this.addProductForm.value.price)
      formData.append('categoryId', this.addProductForm.value.categoryId)
      formData.append('image', this.selectedFile)
      if (!this.isEditable) {
        this.eventService.addProduct(formData).subscribe((response) => {
          if (response.status) {
            this.toast.showSuccess(response.message)
            this.addProductForm.reset()
          } else {
            this.toast.showError(response.message)
          }
        },
          (error) => {
            this.toast.showError(error.message)
          }
        )
      } else {
        this.eventService.updateEvent(this.id, formData).subscribe((response) => {
          if (response.status) {
            this.toast.showSuccess(response.message)
            this.addProductForm.reset()
          } else {
            this.toast.showError(response.message)
          }
        },
          (error) => {
            this.toast.showError(error.message)
          }, () => {
            this.router.navigate(['/viewProducts'])
          }
        )
      }
    } else {
      this.toast.showError('Fill the form correctly')
    }
  }
}
