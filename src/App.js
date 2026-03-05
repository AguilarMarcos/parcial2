import React, { useState } from 'react';
import './App.css';
import mifoto from './formal.jpeg';

function App() {
  // Estados para navegar: 'inicio', 'descargas1', 'metodologias'
  const [vista, setVista] = useState('inicio');
  // Estado para controlar qué imagen de metodología se muestra en el modal
  const [metodologiaActiva, setMetodologiaActiva] = useState(null); 
  const nombreAlumno = "Aguilar Muñoz Marcos Uriel";

  // --- VISTA 1: DOCUMENTACIÓN PARCIAL 1 (Centro de Descargas) ---
  if (vista === 'descargas1') {
    return (
      <div className="pantalla-oscura">
        <div className="centro-descargas-directo">
          <h1 className="titulo-seccion">Centro de Descargas</h1>
          <div className="lista-botones">
            <a href="/coma.pdf" download><button className="btn btn-azul">COMANDOS BÁSICOS DE REACT</button></a>
            <a href="/iee.pdf" download><button className="btn btn-verde">ISO / ESTANDAR IEEE</button></a>
            <a href="/reque.pdf" download><button className="btn btn-gris">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</button></a>
            <a href="/sha.pdf" download><button className="btn btn-gris">CÓDIGO PYTHON ALGORITMO SHA-256</button></a>
            <button className="btn btn-gris" onClick={() => setVista('inicio')} style={{marginTop: '20px', border: '1px solid #555'}}>
              VOLVER AL PERFIL
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- VISTA 2: DOCUMENTACIÓN PARCIAL 2 (Metodologías con Modal) ---
  if (vista === 'metodologias') {
    return (
      <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center', position: 'relative' }}>
        
        {/* VENTANA FLOTANTE (MODAL) - Corregida para imágenes largas */}
        {metodologiaActiva && (
          <div style={styles.overlay}>
            <div style={styles.modalContenedor}>
              <div style={styles.modalHeader}>
                <span style={{ fontWeight: 'bold' }}>Vista de {metodologiaActiva.nombre}</span>
                <button onClick={() => setMetodologiaActiva(null)} style={styles.botonCerrar}>×</button>
              </div>
              <div style={styles.modalBody}>
                <img 
                  src={metodologiaActiva.img} 
                  alt={metodologiaActiva.nombre} 
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto', 
                    display: 'block',
                    margin: '0 auto' 
                  }} 
                />
              </div>
            </div>
          </div>
        )}

        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>METODOLOGÍAS DE DESARROLLO DE SW</h1>
        <h2 style={{ fontSize: '20px', margin: '20px 0' }}>¿Qué es una metodología de desarrollo de software?</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify', fontSize: '14px' }}>
          Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático...
        </p>
        
        <h2 style={{ fontSize: '22px', marginTop: '30px', fontWeight: 'bold' }}>TIPOS DE METODOLOGÍAS</h2>
        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => setMetodologiaActiva({nombre: 'Cascada', img: '/cascada.png'})} style={{ ...styles.btnMeto, backgroundColor: '#007bff' }}>CASCADA</button>
          <button onClick={() => setMetodologiaActiva({nombre: 'Modelo V', img: '/v.png'})} style={{ ...styles.btnMeto, backgroundColor: '#6c757d' }}>MODELO V</button>
          <button onClick={() => setMetodologiaActiva({nombre: 'Ágiles', img: '/agiles.png'})} style={{ ...styles.btnMeto, backgroundColor: '#198754' }}>ÁGILES</button>
          <button onClick={() => setMetodologiaActiva({nombre: 'Scrum', img: '/srum.png'})} style={{ ...styles.btnMeto, backgroundColor: '#dc3545' }}>SCRUM</button>
          <button onClick={() => setMetodologiaActiva({nombre: 'Kanban', img: '/kanban.png'})} style={{ ...styles.btnMeto, backgroundColor: '#ffc107', color: 'black' }}>KANBAN</button>
          <button onClick={() => setMetodologiaActiva({nombre: 'XP', img: '/xp.png'})} style={{ ...styles.btnMeto, backgroundColor: '#0dcaf0', color: 'black' }}>XP</button>
          <button onClick={() => setMetodologiaActiva({nombre: 'Híbridas', img: '/hibridas.png'})} style={{ ...styles.btnMeto, backgroundColor: '#212529' }}>HÍBRIDAS</button>
        </div>

        <hr style={{ margin: '40px 0', borderColor: '#eee' }} />
        <h3 style={{ fontWeight: 'bold' }}>LINK A TABLERO DE TRABAJO</h3>
        <a  href="https://utd-team-ht63x3ao.atlassian.net/jira/software/projects/SCRUM/boards/1" style={{ border: '1px solid #007bff', color: '#007bff', background: 'none', padding: '5px 15px', marginTop: '10px' }}>---- JIRA ----</a>
        
        <hr style={{ margin: '40px 0', borderColor: '#eee' }} />
        <button onClick={() => setVista('inicio')} style={{ border: '1px solid #007bff', color: '#007bff', background: 'none', padding: '5px 15px', cursor: 'pointer' }}>
          ---- REGRESAR MENÚ PRINCIPAL ----
        </button>
        
        <p style={{ marginTop: '20px', fontSize: '18px' }}>Escribe la frase que colocaste en el tablero de metodología ágil:</p>
        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>No tienes que ser grande para empezar, pero tienes que empezar para ser grande</p>
        <p style={{ fontWeight: 'bold', fontSize: '22px', marginTop: '10px' }}>Alumno: {nombreAlumno}</p>
        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />
      </div>
    );
  }

  // --- VISTA INICIAL: PERFIL ---
  return (
    <div className="pantalla-oscura">
      <div className="contenedor-perfil">
        <img src={mifoto} alt="Perfil" className="foto-perfil-simple" />
        <h1 className="evaluacion-texto">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
        <p className="alumno-texto">Alumno: {nombreAlumno}</p>
        <div className="enlaces-inferiores">
          <a href="https://www.linkedin.com/in/marcos-uriel-aguilar-mu%EF%BF%BDoz-675b373a4/" target="_blank" rel="noreferrer">Visitar mi perfil de Linkedin</a>
          <button onClick={() => setVista('descargas1')} className="boton-enlace">Documentación Parcial 1</button>
          <button onClick={() => setVista('metodologias')} className="boton-enlace">Documentación Parcial 2</button>
        </div>
      </div>
    </div>
  );
}

// ESTILOS CORREGIDOS
const styles = {
  btnMeto: { 
    color: 'white', border: 'none', padding: '10px 0', borderRadius: '5px', 
    cursor: 'pointer', fontWeight: 'bold', width: '130px', textAlign: 'center', fontSize: '14px' 
  },
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
    padding: '20px'
  },
  modalContenedor: {
    backgroundColor: 'white', 
    width: '95%', 
    maxWidth: '900px', 
    maxHeight: '90vh', // Evita que se salga de la pantalla verticalmente
    borderRadius: '8px', 
    overflow: 'hidden', 
    boxShadow: '0 5px 30px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column'
  },
  modalHeader: {
    padding: '10px 20px', 
    borderBottom: '1px solid #eee', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    color: '#333',
    flexShrink: 0 // Mantiene el header fijo arriba
  },
  botonCerrar: { 
    background: '#f44336', 
    border: 'none', 
    fontSize: '20px', 
    cursor: 'pointer', 
    color: 'white',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: { 
    padding: '15px', 
    backgroundColor: '#fff',
    overflowY: 'auto' // Habilita scroll si la imagen de XP/Kanban es muy grande
  } 
};

export default App;