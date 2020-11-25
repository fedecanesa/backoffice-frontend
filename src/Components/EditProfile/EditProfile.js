import React from "react";

export default class EditProfile extends React.Component {

    render(){
        const { zone, name, dni, seniority , email, phone, job , imgUrl , hourPrice  , description} = this.props.data
        
        return(
            <>
            {
            <form className="editprofile"> 
                <div className="editprofile-professional">
                    
                    <h2 className="editprofile-title">Ficha del profesional</h2>
                    
                    <label className="editprofile-label">Nombre completo</label>
                    <input 
                        type="text" 
                        className="editprofile-input" 
                        name="name" 
                        value={name} 
                    />
                    <label className="editprofile-label">URL de la foto</label>
                    <input 
                        type="url" 
                        className="editprofile-input" 
                        placeholder="URL de la imagen" 
                        name="imgUrl" 
                        value={imgUrl} 
                    />
                    <label className="editprofile-label">DNI</label>
                    <input 
                        type="number" 
                        className="editprofile-input" 
                        name="dni" 
                        value={dni} 
                    />
                    <label className="editprofile-label">E-mail</label>
                    <input 
                        type="mail" 
                        className="editprofile-input" 
                        name="email" 
                        value={email} 
                    />
                    <label className="editprofile-label">Teléfono</label>
                    <input 
                        type="number" 
                        className="editprofile-input" 
                        name="phone" 
                        value={phone} 
                    />
                    
                    <label className="editprofile-label">Ocupación</label>
                    <input
                        type="text" 
                        className="editprofile-input" 
                        name="job" 
                        value={job} 
                    />

                    <label className="editprofile-label">Años de antigüedad</label>
                    <input 
                        type="text" 
                        className="editprofile-input" 
                        name="seniority" 
                        value={seniority} 
                    />
                    
                    <label className="editprofile-label">Valor-hora de trabajo</label>
                    <input 
                        type="number" 
                        className="editprofile-input" 
                        name="hourPrice" 
                        value={hourPrice} 
                    />

                    <label className="editprofile-label">Zona laboral</label>
                    <input 
                        type="text" 
                        className="editprofile-input" 
                        name="zone" 
                        value={zone}
                    />
    
                    <label className="editprofile-label">Descripción ingresada</label>
                    <textarea 
                        type="text" 
                        className="editprofile-textarea" 
                        name="description" 
                        value={description} 
                    />
                    
                    <button className="editprofile-button" onClick={this.handleSubmit}> Guardar </button>
                </div>
            </form> 
            }
            </>
            )
    }
}
