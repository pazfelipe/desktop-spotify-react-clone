import React, {ChangeEvent, FormEvent, useRef} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';

import {ContextMenu} from 'primereact/contextmenu';
import {MenuItemCommandParams} from 'primereact/menuitem';
import {useDispatch} from 'react-redux';

const ItemPlaylist = ({id, name}: {id: number, name: string;}) => {

  const cm = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState(name);

  const onDeleteItem = () => {
    dispatch({type: 'DELETE_PLAYLIST', payload: id});
    if(location.pathname.substring(location.pathname.lastIndexOf('/') + 1)) {
      navigate('/library');
    }
  };

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onHandleEdit();
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEditing(false);
  };


  const onHandleEdit = () => {
    dispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        name: value,
        id
      }
    });
  };

  const contextItems = [
    {
      label: 'Add to queue',
    },
    {
      label: 'Go to playlist radio',
    },
    {
      separator: true
    },
    {
      label: 'Collaborative playlist',
    },
    {
      label: 'Add to profile',
    },
    {
      separator: true
    },
    {
      label: 'Edit details',
    },
    {
      label: 'Create similar playlist'
    },
    {
      label: 'Delete',
      command: (e: MenuItemCommandParams) => onDeleteItem()
    },
    {
      label: 'Rename',
      command: () => setEditing(true)
    },
    {
      separator: true
    },
    {
      label: 'Download'
    },
    {
      label: 'Create playlist'
    },
    {
      label: 'Create folder'
    },
    {
      label: 'Share',
      items: [
        {
          label: 'Copy Spotify URI'
        },
        {
          label: 'Embed playlist',
        },
      ]
    },
  ];

  const openContextMenu = (e: any) => {
    // @ts-ignore: Object is possibly 'null'.
    cm!.current!.show(e);
  };

  return (
    <div>
      <ContextMenu
        model={contextItems}
        ref={cm}
        className='bg-grey-2 text-white'
        appendTo={'self'}
      />

      {
        editing
          ? <form onSubmit={onSubmit}>
            <input
              value={value}
              onChange={event => onHandleChange(event)}
              autoFocus
              onBlur={() => setEditing(false)}
            />
          </form>
          : <NavLink
            to={`/playlist/${id}`}
            onContextMenu={(event) => openContextMenu(event)}
            aria-haspopup="true"
          >
            {name}
          </NavLink>
      }
    </div>
  );
};

export default ItemPlaylist;
