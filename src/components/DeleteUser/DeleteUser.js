import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { apiService } from '../../servise/apiService'
import './DeleteUser.scss'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '60%',
    flexWrap: 'wrap',
    outline: 'none'
  }
}))

const TransitionsModal = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteUser = () => {
    apiService.deleteUser(props.user._id).then((res) => {
      console.log(res)
      apiService.getUser().then(res => {
        props.updateData(res.data)
      })
    })
    handleClose()

  }

  return (
    <div>
      <button className='btn btn-primary btn-sm' onClick={handleOpen}>
        Delete
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className='wrapperLink'>
              <button onClick={handleClose} className='btn btn-outline-primary'>Back to user list</button>
            </div>
            <div className='title'>
              <h3>Delete user</h3>
            </div>
            <div className='text'>
              <span>Do you really want to delete?</span>
            </div>
            <div className='text'>
              <span>User:</span>
            </div>
            <div className='text'>
              <span>{props.user.firstName}</span>
              <span>{props.user.lastName}</span>
            </div>
            <div className='wrapperButton'>
              <button onClick={deleteUser} className='btn btn-outline-primary'>Delete</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
export default TransitionsModal
