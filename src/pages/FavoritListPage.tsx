import { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useAppDispatch, useAppSelector } from "src/apps/store/hooks/hooks";
import {
  getFavoritContacts,
  useGetFavoriteContactsQuery,
} from "src/apps/store/ducks/favoritContacts";

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector((s) => s.favorite);
  const contactsState = useAppSelector((s) => s.contacts);
  const { data: favoriteContactsState } = useGetFavoriteContactsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (favoriteContactsState && contactsState) {
      dispatch(getFavoritContacts({ contactsState, favoriteContactsState }));
    }
  }, [favoriteContactsState, contactsState, dispatch]);

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts &&
        favoriteContacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  );
});
